import Header from '../components/landingPage/header/Header';
import Main from '../components/landingPage/main/Main';
import Footer from '../components/landingPage/footer/Footer';
import WatsonAssistantChat from '@/components/elements/WatsonAssistant';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <WatsonAssistantChat />
    </>
  );
}
