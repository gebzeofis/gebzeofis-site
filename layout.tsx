import Header from '../components/Header';

export default function RootLayout({ children }) {
return (
<html lang="tr">
<head>
<title>Gebze Ofis | Kitap & Kırtasiye</title>
<meta
name="description"
content="Gebze Ofis ile kitap ve kırtasiye alışverişinizi kolaylaştırın. Güvenli ödeme ve hızlı teslimat avantajlarıyla."
/>
<link rel="icon" href="/favicon.ico" />
</head>
<body style={{ margin: 0, fontFamily: 'Arial' }}>
<Header />
{children}
</body>
</html>
);
}

