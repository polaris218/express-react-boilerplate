import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import route from './routes/index';
import mongoose from 'mongoose';

const app = express();

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/offerbrite',{ useNewUrlParser: true }, (err) => {
    if (err) throw err;
    console.log("successfully connected");
});
mongoose.Promise = global.Promise;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
/**
 * @param {ssrRouter} crucial part for ServerSideRendering
 */
// app.use(ssrRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({});
});
  
export default app;