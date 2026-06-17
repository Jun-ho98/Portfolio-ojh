import { PrismLight } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// 사용하는 언어만 등록해 번들을 가볍게 유지합니다.
// 새 언어가 필요하면 import 후 여기에 registerLanguage 한 줄만 추가하면 됩니다.
PrismLight.registerLanguage('java', java);
PrismLight.registerLanguage('sql', sql);
PrismLight.registerLanguage('jsx', jsx);

export { PrismLight as SyntaxHighlighter, vscDarkPlus };
