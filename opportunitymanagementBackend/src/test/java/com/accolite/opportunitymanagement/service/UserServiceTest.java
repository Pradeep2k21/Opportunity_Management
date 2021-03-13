package com.accolite.opportunitymanagement.service;


import com.accolite.opportunitymanagement.mapper.UserMapper;
import com.accolite.opportunitymanagement.model.User;
import com.accolite.opportunitymanagement.service.Impl.UserServiceImpl;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.Assert;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;

@SpringBootTest
public class UserServiceTest {


    @Mock
    JdbcTemplate jdbcTemplate;

    @InjectMocks
    UserServiceImpl userServiceImpl;

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
    public  void getTest(){

        User user = setUserObject();
        Mockito.when(jdbcTemplate.queryForObject(
                Mockito.anyString(),
                Mockito.any(UserMapper.class), (Object[])Mockito.any())).thenReturn(user);
        User user1 = (User) userServiceImpl.getUser("1");
        Assert.assertEquals("Pradeep",user1.getFirstName());
    }
    @Test
    public void getAllTest(){
        ArrayList<User> userList = new ArrayList<>();
        User user = setUserObject();
        userList.add(user);
        Mockito.when(jdbcTemplate.query(
                Mockito.anyString(),
                Mockito.any(UserMapper.class))).thenReturn(userList);
        ArrayList<User> userResList = (ArrayList<User>) userServiceImpl.getAllUsers();
        Assert.assertEquals(userList.size(),userResList.size());
    }

    @Test
    public void insertTest() throws Exception {
        int expectedVal = 1;
//        int expectedError=-1;
//        User user2 = new User("abcg","ododo","3","4","5");
        User user = setUserObject();
        Mockito.when(jdbcTemplate.update(
                Mockito.anyString(),
                (Object[])Mockito.any()
        )).thenReturn(expectedVal);
        int resultVal = userServiceImpl.insert(user);
        Assert.assertEquals(expectedVal,resultVal);
//
//        Mockito.when(jdbcTemplate.update(
//                Mockito.anyString(),
//                (Object[])Mockito.any()
//        )).thenThrow(new Exception()).thenReturn(-1);
//
//        int resultVal1 = userServiceImpl.insert(user);
//        Assert.assertEquals(expectedError,resultVal1);

    }

}
