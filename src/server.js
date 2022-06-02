import app from './app';
import connectDatabase from './util/serviceDatabase';

connectDatabase();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Running on PORT 👉 http://localhost/${PORT} 🙉`);
});
