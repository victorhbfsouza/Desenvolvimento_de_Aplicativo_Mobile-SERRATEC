import 'react-native-gesture-handler';
import Routes from "./routes";
import { DataProvider } from './context/DataContext';
import { EditorasProvider } from './context/EditorasContext';
import { LivrosProvider } from './context/LivrosContext';

export default function App() {
  return (
    <DataProvider>
      <EditorasProvider>
        <LivrosProvider>
          <Routes/>
        </LivrosProvider>
      </EditorasProvider>
    </DataProvider>
  );
}

