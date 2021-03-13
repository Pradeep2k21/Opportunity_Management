package com.accolite.opportunitymanagement.service;

import com.accolite.opportunitymanagement.mapper.OpportunityMapper;
import com.accolite.opportunitymanagement.model.Opportunity;
import com.accolite.opportunitymanagement.service.Impl.OpportunityServiceImpl;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.Assert;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.Date;
import java.util.ArrayList;

@SpringBootTest
public class OppServiceTest {

    @Mock
    JdbcTemplate jdbcTemplate;

    @InjectMocks
    OpportunityServiceImpl opportunityServiceImpl;

    @Before
    public Opportunity setOpportunityObject()
    {
        Opportunity opportunity = new Opportunity();
        opportunity.setId(4);
        opportunity.setDescription("java Developer");
        opportunity.setLocation("Mumbai");
        opportunity.setSkills("java");
        opportunity.setUserId("1");
        opportunity.setMinExperience(2);
        opportunity.setDemand(3);
        opportunity.setDate(new Date(System.currentTimeMillis()));
        return opportunity;
    }
    @Test
    public  void getTest(){

        Opportunity opportunity = setOpportunityObject();


        Mockito.when(jdbcTemplate.queryForObject(
                Mockito.anyString(),
                Mockito.any(OpportunityMapper.class), (Object[])Mockito.any())).thenReturn(opportunity);
        Opportunity opportunity1 = (Opportunity) opportunityServiceImpl.getOpportunity(4);
        Assert.assertEquals("Mumbai",opportunity.getLocation());
    }
    @Test
    public void getAllTest(){
        ArrayList<Opportunity> opportunityList = new ArrayList<>();
        Opportunity opportunity = setOpportunityObject();
        opportunityList.add(opportunity);
        Mockito.when(jdbcTemplate.query(
                Mockito.anyString(),
                Mockito.any(OpportunityMapper.class))).thenReturn(opportunityList);
        ArrayList<Opportunity> opportunityResList = (ArrayList<Opportunity>) opportunityServiceImpl.getAllOpportunity();
        Assert.assertEquals(opportunityList.size(),opportunityResList.size());
    }

    @Test
    public void insertTest(){
        int expectedVal = 1;
        Opportunity opportunity = setOpportunityObject();
        Mockito.when(jdbcTemplate.update(
                Mockito.anyString(),
                (Object[])Mockito.any()
        )).thenReturn(expectedVal);
        int resultVal = opportunityServiceImpl.insert(opportunity);
        Assert.assertEquals(expectedVal,resultVal);
    }

    @Test
    public void updateTest()
    {
        int expectedVal = 1;
        int id = 1;
        Opportunity opportunity = setOpportunityObject();
        Mockito.when(jdbcTemplate.update(
                Mockito.anyString(),
                (Object[])Mockito.any()
        )).thenReturn(expectedVal);
        int resultVal = opportunityServiceImpl.update(opportunity,id);
        Assert.assertEquals(expectedVal,resultVal);
    }

    @Test
    public void deleteTest()
    {
        int expectedVal = 1;
        int id = 1;
        Mockito.when(jdbcTemplate.update(
                Mockito.anyString(),
                (Object[])Mockito.any()
        )).thenReturn(expectedVal);
        int resultVal = opportunityServiceImpl.delete(id);
        Assert.assertEquals(expectedVal,resultVal);
    }
}
