import multer from 'multer';
import uuid from 'uuid-v4';

const storage = multer.diskStorage({
  destination: './upload',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage }).single('file');

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
      res.status(404).send(err);
      // An unknown error occurred when uploading.
    } else {
      res.status(200).send();
    }
    // Everything went fine.
  });
};

/**
 * file download
 * @see https://gist.github.com/javilobo8/097c30a233786be52070986d8cdb1743
 * @borrows token from token middleware
 * 
 */

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
  // './upload/GitHubDesktopSetup.exe'
};
