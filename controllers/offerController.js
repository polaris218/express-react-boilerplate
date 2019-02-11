import multer from 'multer';
import uuid from 'uuid-v4';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

import Offer from '../models/offerSchema';

let i = 0;
let fileid = [];
const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    
    // fs.mkdirSync(`./upload`, (err) => {
    //   if (err) console.log(err.message);
    // });
    cb(null, `./upload`);  
  } ,
  filename(req, file, cb) {
    // cb(null, `${file.originalname}`);
    fileid[i] = `${uuid()}`;
    cb(null, `${fileid[i]}${path.extname(file.originalname)}`);
    i++;
    Offer.updateOne({
      offer_image: {
        mainphoto: uuid(),
      }
    });
  },
});

const upload = multer({ storage }).array('file', 4);

/**
 * 
 * req.file.mimetype->extension
 *  
 */
export const fileUpload = (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(404).send(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      console.log(err.message);
      res.status(404).send(err);
      // An unknown error occurred when uploading.
    } else {      
      const { 
        title,
        description,
        startdate,
        enddate,
        fullprice,
        discount,
        category,
        address,
        phone,
        site,
      } = req.body;

      Offer.create({
        _id: mongoose.Types.ObjectId(),
        offer_image: {
          mainphoto: { data: fs.readFileSync(req.files[0].path), contentType: 'image/png' },
          subphoto1: {data: fs.readFileSync(req.files[1].path), contentType: 'image/png' },
          subphoto2: { data: fs.readFileSync(req.files[2].path), contentType: 'image/png' },
          subphoto3: { data: fs.readFileSync(req.files[3].path), contentType: 'image/png' },
        },
        title,
        description,
        choosedate: {
          from : startdate,
          to: enddate,
        },
        nodate: true,
        fullprice,
        discount,
        category,
        address,
        phone,
        site,
        offerpath: './upload',
        user: req.app.get('email'),
      })
      .then(data => {
        i=0;
        fileid=[];
        res.status(200).send();
      })
    }
  });
};

/**
 * file download
 * @see https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743
 * @borrows token from token middleware
 * 
 */

export const getOfferData = (req, res, err) => {
  Offer.find({}, (err, data) => {
    res.status(200).send(data);
  });
};

export const getOfferView = (req, res, err) => {
  // console.log(req.headers.offerid);
  const { offerid } = req.headers;
  Offer.findOne({ offerId: offerid }).exec((err, data) => {
    if(err) res.status(500).send();
    res.status(200).send(data);
  });
}
export const fileDownload = (req, res) => {
  const { fileid } = req.headers;
  fileload.findOne({
    attributes: ['filename'],
    where: {
      fileId: fileid,
    }
  })
    .then(dataset => {
      if (dataset) {
        res.status(200).download(
          `./upload/${dataset.filename}`, dataset.filename
        );
      } else {
        res.status(404).send('failed');
      }
    })
    .catch(_err => {
      res.status(404).send('failed');
  })
};
