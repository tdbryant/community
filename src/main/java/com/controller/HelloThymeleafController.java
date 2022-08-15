package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HelloThymeleafController {

    @GetMapping("/hello")
    public String helloThymeleaf(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model){

        model.addAttribute("name", name);

        //指定视图（模板引用使用的界面（html））
        return "hello";
    }
}
