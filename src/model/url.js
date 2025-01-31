import mongoose from 'mongoose';


let Url;

if (mongoose.models.Url) {
    Url = mongoose.model('Url');
} else {


    const UrlSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true,
        },
    });
    Url = mongoose.model('Url', UrlSchema);
}

export default Url;