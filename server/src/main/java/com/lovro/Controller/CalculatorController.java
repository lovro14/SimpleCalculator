package com.lovro.Controller;

import com.lovro.Service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/calculate")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @RequestMapping(method = RequestMethod.POST, produces = "application/json")
    @CrossOrigin(origins = "*")
    public Map<String,String> getString(@RequestBody Map<String,String> mathExpression){
        return calculatorService.calculateMathematicalExpression(mathExpression.get("mathematicalExpression"));
    }
}

