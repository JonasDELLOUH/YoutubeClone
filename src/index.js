import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
>
    <App/>
</DevSupport>)