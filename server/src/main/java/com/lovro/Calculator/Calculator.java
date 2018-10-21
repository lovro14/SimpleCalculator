package com.lovro.Calculator;

import com.lovro.ErrorHandling.CalculationBadRequestException;

import java.util.HashMap;
import java.util.Map;

public class Calculator {

    private static final double EPSILON = 1e-10;

    private static Calculator instance = null;

    private Calculator(){}

    public static Calculator getInstance(){
        if (instance == null){
            instance = new Calculator();
        }
        return instance;
    }

    public Map<String, String> calculate(String mathematicalExpression){
        try{
            //Only number is given (not mathematical operation)
            double number = Double.parseDouble(mathematicalExpression);
            Map<String,String> numberResult = new HashMap<>();
            numberResult.put("result", String.valueOf(number));
            return numberResult;
        }catch (NumberFormatException e){
            System.out.println("Mathematical expression entered");
        }

        double result = 0;

        try{
            String[] numbers;
            if(mathematicalExpression.contains("*")){
                numbers = mathematicalExpression.split("\\*");
                result = Double.parseDouble(numbers[0]) * Double.parseDouble(numbers[1]);
            }else if (mathematicalExpression.contains("/")){
                numbers = mathematicalExpression.split("/");
                double a = Double.parseDouble(numbers[0]);
                double b = Double.parseDouble(numbers[1]);
                if (Math.abs(b) < EPSILON){
                    throw new CalculationBadRequestException("Division by 0!");
                }
                result = a / b;
            }else if(mathematicalExpression.contains("+") || mathematicalExpression.contains("-")){
                char[] charExpression = mathematicalExpression.toCharArray();
                for (int i = 1; i < charExpression.length; i++){
                    if(Math.abs(result) > EPSILON){
                        break;
                    }
                    switch (charExpression[i]){
                        case '+':
                            numbers = mathematicalExpression.split("\\+");
                            result = Double.parseDouble(numbers[0]) + Double.parseDouble(numbers[1]);
                            break;
                        case '-':
                            numbers = mathematicalExpression.split("-");
                            if(numbers.length > 2){
                                result = Double.parseDouble("-"+numbers[1]) - Double.parseDouble(numbers[2]);
                            }
                            else{
                                result = Double.parseDouble(numbers[0]) - Double.parseDouble(numbers[1]);
                            }
                            break;
                    }
                }

            }else{
                result = Double.parseDouble(mathematicalExpression);
            }
        }catch (NumberFormatException | IndexOutOfBoundsException e){
            throw new CalculationBadRequestException("Invalid mathematical operation");
        }

        Map<String,String> expressionResult = new HashMap<>();
        expressionResult.put("result", String.valueOf(result));
        return expressionResult;
    }
}
