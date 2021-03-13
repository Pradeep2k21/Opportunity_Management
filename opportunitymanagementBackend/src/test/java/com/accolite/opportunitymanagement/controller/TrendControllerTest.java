package com.accolite.opportunitymanagement.controller;

import com.accolite.opportunitymanagement.service.Impl.OpportunityServiceImpl;
import com.accolite.opportunitymanagement.service.Impl.TrendServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = TrendController.class)
public class TrendControllerTest {

    @Autowired
    public MockMvc mockMvc;

    @MockBean
    public TrendServiceImpl trendServiceImpl;

    @Autowired
    public ObjectMapper objectMapper;

    @Test
    public void getLocationTest() throws Exception{
        List<String> locList = new ArrayList<>();
        locList.add("mumbai");
        locList.add("delhi");
        Mockito.when(trendServiceImpl.getByLocation()).thenReturn(locList);
        mockMvc.perform(get("/trends/getLocation")).andExpect(status().isOk());
    }
    @Test
    public void getLocationCountTest() throws Exception{
        List<Long> locList = new ArrayList<>();
        locList.add(2L);
        locList.add(3L);
        Mockito.when(trendServiceImpl.getByLocationCount()).thenReturn(locList);
        mockMvc.perform(get("/trends/getLocationCount")).andExpect(status().isOk());
    }
    @Test
    public void getSkillTest()throws Exception{
        List<String> skillList = new ArrayList<>();
        skillList.add("java");
        skillList.add("python");
        Mockito.when(trendServiceImpl.getBySkill()).thenReturn(skillList);
        mockMvc.perform(get("/trends/getSkills")).andExpect(status().isOk());
    }
    @Test
    public void getSkillCountTest() throws Exception{
        List<Integer> locList = new ArrayList<>();
        locList.add(2);
        locList.add(3);
        Mockito.when(trendServiceImpl.getBySkillCount()).thenReturn(locList);
        mockMvc.perform(get("/trends/getSkillsCount")).andExpect(status().isOk());
    }

    @Test
    public void getYearTest()throws Exception{
        List<String> yearList = new ArrayList<>();
        yearList.add("2021");
        yearList.add("2022");
        Mockito.when(trendServiceImpl.getByYear()).thenReturn(yearList);
        mockMvc.perform(get("/trends/getYear")).andExpect(status().isOk());
    }

    @Test
    public void getYearCountTest() throws Exception{
        List<Integer> locList = new ArrayList<>();
        locList.add(2);
        locList.add(3);
        Mockito.when(trendServiceImpl.getByYearCount()).thenReturn(locList);
        mockMvc.perform(get("/trends/getYearCount")).andExpect(status().isOk());
    }
    @Test
    public void getYearByLocationTest()throws Exception{
        String location="mumbai";
        List<String> locationList = new ArrayList<>();
        locationList.add("mumbai");
        locationList.add("delhi");
        Mockito.when(trendServiceImpl.getByYear(location)).thenReturn(locationList);
        mockMvc.perform(get("/trends/getYear/".concat((location)))).andExpect(status().isOk());
    }

    @Test
    public void getYearByLocationCountTest() throws Exception{
        List<Integer> locList = new ArrayList<>();
        String location = "mumbai";
        locList.add(2);
        locList.add(3);
        Mockito.when(trendServiceImpl.getByYearCount()).thenReturn(locList);
        mockMvc.perform(get("/trends/getYearCount/".concat((location)))).andExpect(status().isOk());
    }
}
