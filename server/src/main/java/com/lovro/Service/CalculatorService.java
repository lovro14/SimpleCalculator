package com.lovro.Service;

import com.lovro.Calculator.Calculator;
import com.lovro.ErrorHandling.CalculationBadRequestException;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class CalculatorService {

    public Map<String, String> calculateMathematicalExpression(String mathematicaExpression) {
        if(!mathematicaExpression.matches("^[\\d eE+-/*]+$")){
            throw new CalculationBadRequestException("Only numbers and mathematical operands (+,-,*,/) are allowed");
        }
        mathematicaExpression = mathematicaExpression.replaceAll("\\s+","");
        Calculator calculator = Calculator.getInstance();
        return calculator.calculate(mathematicaExpression);
    }
}
