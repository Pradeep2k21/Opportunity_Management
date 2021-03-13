package com.accolite.opportunitymanagement.service.Impl;

import com.accolite.opportunitymanagement.mapper.UserMapper;
import com.accolite.opportunitymanagement.model.User;
import com.accolite.opportunitymanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("UserService")
public class UserServiceImpl implements UserService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<User> getAllUsers()  {
        String SQL = "select * from User";
        return jdbcTemplate.query(SQL,new UserMapper());
    }

    @Override
    public User getUser(String userId){
        String SQL = "select * from User where userId = ?";
        return jdbcTemplate.queryForObject(SQL,new UserMapper(),new Object[]{userId});
    }

    @Override
    public int insert(User user) throws Exception{

        int statusCode = -1;
            String insertSQL = "Insert into User (userId,firstName,lastName,email,photoUrl) values (?,?,?,?,?)";
            statusCode = jdbcTemplate.update(insertSQL, user.getUserId(),
                    user.getFirstName(),
                    user.getLastName(),
                    user.getEmail(),
                    user.getPhotoUrl());
        return statusCode;
    }

}
