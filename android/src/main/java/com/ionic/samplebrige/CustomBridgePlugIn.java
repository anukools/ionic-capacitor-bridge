package com.ionic.samplebrige;

import android.util.Log;

public class CustomBridgePlugIn {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
