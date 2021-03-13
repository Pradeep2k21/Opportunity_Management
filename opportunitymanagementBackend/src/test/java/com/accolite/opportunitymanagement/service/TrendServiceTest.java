package com.accolite.opportunitymanagement.service;


import com.accolite.opportunitymanagement.service.Impl.TrendServiceImpl;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;



import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
public class TrendServiceTest {

    @Mock
    JdbcTemplate jdbcTemplate;


    @InjectMocks
    TrendServiceImpl trendService;



    @Test
    public void trendLocationTest(){

        List<String> list = new ArrayList<>();
        list.add("DELHI");


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("count(*)",2);put("location","delhi");}
        });
        rows.add(new HashMap(){
            {put("count(*)",2);put("location","delhi");}
        });

        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString())).thenReturn(rows);
        Assert.assertEquals(trendService.getByLocation(),list);

    }

    @Test
    public void trendLocationCountTest(){

        List<Long> list = new ArrayList<>();
        list.add(2L);


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("count(*)",1L);put("location","delhi");}
        });

        rows.add(new HashMap(){
            {put("count(*)",1L);put("location","delhi");}
        });
        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString())).thenReturn(rows);
        Assert.assertEquals(trendService.getByLocationCount(),list);

    }
    @Test
    public void trendSkillTest(){

        List<String> list = new ArrayList<>();
        list.add("java");


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("skills","java");}
        });
        rows.add(new HashMap(){
            {put("skills","java");}
        });

        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString())).thenReturn(rows);
        Assert.assertEquals(trendService.getBySkill(),list);

    }

    @Test
    public void trendSkillCountTest(){

        List<Integer> list = new ArrayList<>();
        list.add(2);


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {

                put("skills","java");

            }
        });
        rows.add(new HashMap(){
            {

                put("skills","java");
            }
        });

        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString())).thenReturn(rows);
        Assert.assertEquals(trendService.getBySkillCount(),list);

    }

    @Test
    public void trendYearTest(){

        List<String> list = new ArrayList<>();
        list.add("2019");


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("date","2019");}
        });
        rows.add(new HashMap(){
            {put("date","2019");}
        });

        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString())).thenReturn(rows);
        Assert.assertEquals(trendService.getByYear(),list);

    }

    @Test
    public void trendYearCountTest(){

        List<Integer> list = new ArrayList<>();
        list.add(2);


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("date","2019");put("demand",1);}
        });
        rows.add(new HashMap(){
            {put("date","2019");put("demand",1);}
        });

        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString())).thenReturn(rows);
        Assert.assertEquals(trendService.getByYearCount(),list);

    }

    @Test
    public void trendYearCountLocationTest(){

        List<Integer> list = new ArrayList<>();
        list.add(2);


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("date","2019");put("demand",1);}
        });

        rows.add(new HashMap(){
            {put("date","2019");put("demand",1);}
        });

        String loc="delhi";
        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString(),(Object[])Mockito.any())).thenReturn(rows);
        Assert.assertEquals(trendService.getByYearCount(loc),list);

    }

    @Test
    public void trendYearLocationTest(){

        List<String> list = new ArrayList<>();
        list.add("2019");


        List<Map<String,Object>> rows = new ArrayList<>();
        rows.add(new HashMap(){
            {put("date","2019");}
        });

        rows.add(new HashMap(){
            {put("date","2019");}
        });

        String loc="delhi";
        Mockito.when(jdbcTemplate.queryForList(
                Mockito.anyString(),(Object[])Mockito.any())).thenReturn(rows);
        Assert.assertEquals(trendService.getByYear(loc),list);

    }


}
