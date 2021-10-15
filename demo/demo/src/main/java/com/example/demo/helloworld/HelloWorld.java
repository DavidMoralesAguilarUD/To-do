package com.example.demo.helloworld;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class HelloWorld {
    @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
    public String helloWorld(){
        return "Hello world many times";
    }
    @GetMapping(path ="/hello-world-bean")
    public HelloWorldBean HelloWorldBean(){
        try{
             return new HelloWorldBean("Hello world");
        } catch (Exception e){
            throw new RuntimeException("Some Error has Happaned! Contact Support at ***-***", e);
        }
              
    }
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
    
}

