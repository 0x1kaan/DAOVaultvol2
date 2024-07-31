import React, { useState } from 'react';
import './ProposalForm'; // Stil dosyasını ekleyelim

const ProposalForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discussion, setDiscussion] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [preview, setPreview] = useState('');
    const [imageError, setImageError] = useState('');
    const [videoError, setVideoError] = useState('');

    const handleDescriptionChange = (e) => {
        if (e.target.value.length <= 40000) {
            setDescription(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ title, description, discussion, image, video, preview });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setImage(URL.createObjectURL(file));
                setImageError('');
            } else if (file.type.startsWith('video/')) {
                setVideo(URL.createObjectURL(file));
                setVideoError('');
            } else {
                e.target.value = null; // Clear the input
                setImageError('Lütfen geçerli bir resim dosyası yükleyin.');
                setVideoError('Lütfen geçerli bir video dosyası yükleyin.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="proposal-form">
            <fieldset>
                <legend>Öneri Formu</legend>
                <label>
                    Başlık (Title):
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Başlık girin..."
                    />
                </label>
                <label>
                    Açıklama (Description) (isteğe bağlı):
                    <textarea
                        value={description}
                        onChange={handleDescriptionChange}
                        maxLength="40000"
                        placeholder="Açıklamanızı buraya yazın..."
                    />
                    <p>{description.length}/40,000</p>
                </label>
                <label>
                    Fotoğraf:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    {imageError && <p className="error">{imageError}</p>}
                </label>
                {image && <img src={image} alt="Uploaded" className="image-preview" />}

                <label>
                    Video:
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                    />
                    {videoError && <p className="error">{videoError}</p>}
                </label>
                {video && <video src={video} controls className="video-preview" />}

                <label>
                    Tartışma (Discussion) (isteğe bağlı):
                    <textarea
                        value={discussion}
                        onChange={(e) => setDiscussion(e.target.value)}
                        placeholder="Tartışma metnini buraya yazın..."
                    />
                </label>
                <label>
                    Önizleme (Preview):
                    <textarea
                        value={preview}
                        onChange={(e) => setPreview(e.target.value)}
                        placeholder="Önizleme metnini buraya yazın..."
                    />
                </label>
                <button type="submit">Devam Et</button>
            </fieldset>
        </form>
    );
};

export default ProposalForm;
