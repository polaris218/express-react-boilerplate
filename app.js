import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import route from './routes';
import ssrRouter from './routes/rendering';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);
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
  
module.exports = app;