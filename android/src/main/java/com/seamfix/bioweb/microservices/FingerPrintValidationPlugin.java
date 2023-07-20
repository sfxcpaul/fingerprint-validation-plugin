package com.seamfix.bioweb.microservices;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "FingerPrintValidation")
public class FingerPrintValidationPlugin extends Plugin {

    private FingerPrintValidation implementation = new FingerPrintValidation();

    @PluginMethod
    public void validateFingerPrint(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.validateFingerPrint(value));
        call.resolve(ret);
    }
}
