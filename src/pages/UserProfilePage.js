import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserProfilePage = () => {
    // Kullanıcı bilgilerini tutacak state
    const [userInfo, setUserInfo] = useState(null);

    // Kullanıcı bilgilerini almak için useEffect
    useEffect(() => {
        // Burada bir API çağrısı yapılabilir
        // Örnek: fetch('/api/user/profile').then(res => res.json()).then(data => setUserInfo(data));
        // Simüle edilmiş kullanıcı verisi
        const fetchUserInfo = () => {
            setUserInfo({
                name: 'John Doe',
                email: 'john.doe@example.com',
            });
        };
        fetchUserInfo();
    }, []);

    return (
        <div>
            <Header />
            <main style={{ padding: '1rem' }}>
                <h1>Kullanıcı Profili</h1>
                {userInfo ? (
                    <div>
                        <p><strong>Ad:</strong> {userInfo.name}</p>
                        <p><strong>E-posta:</strong> {userInfo.email}</p>
                        {/* Kullanıcı bilgilerini güncellemek için bir form ekleyebilirsiniz */}
                    </div>
                ) : (
                    <p>Yükleniyor...</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default UserProfilePage;
