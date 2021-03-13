package com.accolite.opportunitymanagement.controller;

import com.accolite.opportunitymanagement.model.User;
import com.accolite.opportunitymanagement.service.Impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @CrossOrigin("http://localhost:4200")
    @GetMapping(value = "/getAllUsers")
    public List<User> getAllUsers(){
        List<User> userList = new ArrayList<>();
        userList = userService.getAllUsers();
        return userList;
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping(value = "/getUser/{userId}")
    public User getUser(@PathVariable("userId") String userId){
        User user = new User();
        user = userService.getUser(userId);
        return user;
    }

    @CrossOrigin("http://localhost:4200")
    @PostMapping(value = "/add")
    public int addUser(@RequestBody User user) throws Exception
    {
        System.out.println("Inside adduser API ");
        int statusCode = -1;
        statusCode = userService.insert(user);
        return statusCode;
    }
}
