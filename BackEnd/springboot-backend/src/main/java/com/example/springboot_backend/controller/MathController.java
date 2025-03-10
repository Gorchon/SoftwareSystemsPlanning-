package com.example.springboot_backend.controller;

import com.example.springboot_backend.dto.MathResponse;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500") // Allow frontend requests
@RestController
@RequestMapping("/math")
public class MathController {

    @GetMapping("/add")
    public MathResponse add(@RequestParam int num1, @RequestParam int num2) {
        return new MathResponse(num1 + num2);
    }

    @GetMapping("/subtract")
    public MathResponse subtract(@RequestParam int num1, @RequestParam int num2) {
        return new MathResponse(num1 - num2);
    }
}
