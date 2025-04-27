package com.ionic.samplebrige;

import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MyCustomBridge")
public class CustomBridgePlugInPlugin extends Plugin {

    private static final String TAG = "CustomBridgePlugin";

    @PluginMethod
    public void showFlutterView(PluginCall call) {
        String message = call.getString("message");
        if (message != null) {
            // Send broadcast to start Flutter activity
            Intent intent = new Intent("com.ionic.START_FLUTTER");
            intent.putExtra("message", message);
            getContext().sendBroadcast(intent);
            call.resolve();
        } else {
            call.reject("Message is required");
        }
    }

    public void sendMessageToJS(String message) {
        JSObject ret = new JSObject();
        ret.put("message", message);
        notifyListeners("onFlutterMessage", ret);
    }
} 
