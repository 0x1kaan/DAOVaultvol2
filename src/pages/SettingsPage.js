import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SettingsPage = () => {
    // Ayarları tutacak state
    const [settings, setSettings] = useState({
        theme: 'light',
        notifications: true,
    });

    // Ayarları güncelleme fonksiyonu
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Ayarları kaydetme fonksiyonu
    const handleSave = (e) => {
        e.preventDefault();
        // Burada bir API çağrısı yapılabilir
        // Örnek: fetch('/api/user/settings', { method: 'POST', body: JSON.stringify(settings) });
        alert('Ayarlar kaydedildi!');
    };

    return (
        <div>
            <Header />
            <main style={{ padding: '1rem' }}>
                <h1>Ayarlar</h1>
                <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <label>
                        Tema:
                        <select name="theme" value={settings.theme} onChange={handleChange}>
                            <option value="light">Açık</option>
                            <option value="dark">Koyu</option>
                        </select>
                    </label>
                    <label>
                        Bildirimler:
                        <input
                            type="checkbox"
                            name="notifications"
                            checked={settings.notifications}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Kaydet</button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default SettingsPage;
