import createError from 'http-errors';
import express from 'express';
import 'dotenv/config';

import indexRouter from './routes/index.js';
import logEntryRouter from './routes/logEntry.js';
import memberRouter from './routes/member.js';
import verifyTicketRouter from './routes/verifyTicket.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/index', indexRouter);
app.use('/logEntry', logEntryRouter);
app.use('/member', memberRouter);
app.use('/verifyTicket', verifyTicketRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server started on http://localhost:${port}`);
});

export default app;
