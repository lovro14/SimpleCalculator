package com.lovro.ErrorHandling;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CalculationBadRequestException extends RuntimeException{

    public CalculationBadRequestException(String exception){
        super(exception);
    }
}
