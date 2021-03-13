package com.accolite.opportunitymanagement.controller;

import com.accolite.opportunitymanagement.model.User;
import com.accolite.opportunitymanagement.service.Impl.TrendServiceImpl;
import com.accolite.opportunitymanagement.service.Impl.UserServiceImpl;
import com.accolite.opportunitymanagement.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.sql.Date;
import java.util.ArrayList;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {

    @Autowired
    public MockMvc mockMvc;

    @MockBean
    public UserServiceImpl userService;

    @Autowired
    public ObjectMapper objectMapper;

    @Before
    public User setUserObject()
    {
        User user = new User();
        user.setUserId("1");
        user.setFirstName("Pradeep");
        user.setLastName("Kumar");
        user.setEmail("email");
        user.setPhotoUrl("www.photoUrl");
        return user;
    }

    @Test
    public void getAllControllerTest() throws Exception{
        ArrayList<User> userList = new ArrayList<>();
        User user = setUserObject();
        userList.add(user);
        Mockito.when(userService.getAllUsers()).thenReturn(userList);
        mockMvc.perform(get("/user/getAllUsers")).andExpect(status().isOk());
    }

    @Test
    public void getControllerTest() throws Exception{
        String id="1";
        User user = setUserObject();
        Mockito.when(userService.getUser(id)).thenReturn(user);
        mockMvc.perform((get("/user/getUser/".concat(id)))).andExpect(status().isOk());
    }
    @Test
    public void addTest() throws Exception{
        User user = setUserObject();
        String jsonString = objectMapper.writeValueAsString(user);

        Mockito.when(userService.insert(user)).thenReturn(1);
        Assert.assertEquals(userService.insert(user),1);

        mockMvc.perform(post("/user/add")
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(jsonString)
                .accept(MediaType.APPLICATION_JSON_VALUE)
        ).andExpect(status().isOk());






    }

}
