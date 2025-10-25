import FirstComponent from "./components/FirstComponent";
import MultiComponent from "./components/MultiComponent";
import MarkupExample from "./components/MarkupExample";
import CurlyBracesExample from "./components/CurlyBracesExample";
import PropsExample from "./components/PropsExample";
import ConditionalExample from "./components/ConditionalExample";
import MultipleRenderExample from "./components/MultipleRenderExample";
import PureComponentExample from "./components/PureComponentExample";
import UITreeExample from "./components/UITreeExample";

export default function App() {
  return (
    <div>
      <FirstComponent />
      <MultiComponent />
      <MarkupExample />
      <CurlyBracesExample />
      <PropsExample />
      <ConditionalExample />
      <MultipleRenderExample />
      <PureComponentExample value={5} />
      <UITreeExample />
    </div>
  );
}
