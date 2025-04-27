import { CustomBridgePlugIn } from 'capacitor-bridge';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CustomBridgePlugIn.echo({ value: inputValue })
}
