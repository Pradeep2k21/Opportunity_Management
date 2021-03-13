package com.accolite.opportunitymanagement.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.accolite.opportunitymanagement.model.Opportunity;
import com.accolite.opportunitymanagement.service.Impl.TrendServiceImpl;

@RestController
@RequestMapping("/trends")
public class TrendController {
	
	@Autowired
	TrendServiceImpl trendServiceImpl;
	
	@CrossOrigin("http://localhost:4200")
	@GetMapping(value = "/getLocation")
    public List<String> getLocation(){
        List<String> locationList = new ArrayList<>();
        locationList = trendServiceImpl.getByLocation();
        return locationList;
    }
	
	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getLocationCount")
	public List<Long> getLocationCount(){
		List<Long> locationCount = new ArrayList<Long>();
		locationCount = trendServiceImpl.getByLocationCount();
		return locationCount;
	}

	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getSkills")
	public List<String> getSkills(){
		List<String> skillList = new ArrayList<>();
        skillList = trendServiceImpl.getBySkill();
        return skillList;
	}
	
	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getSkillsCount")
	public List<Integer> getSkillCount(){
		List<Integer> locationCount = new ArrayList<Integer>();
		locationCount = trendServiceImpl.getBySkillCount();
		return locationCount;
	}


	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getYear")
	public List<String> getYear(){
		List<String> yoyList = new ArrayList<>();
		yoyList = trendServiceImpl.getByYear();
		return yoyList;
	}

	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getYearCount")
	public List<Integer> getYearCount(){
		List<Integer> yoyCount = new ArrayList<>();
		yoyCount = trendServiceImpl.getByYearCount();
		return yoyCount;
	}

	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getYear/{location}")
	public List<String> getYear(@PathVariable("location") String location){
		List<String> yoyList = new ArrayList<>();
		yoyList = trendServiceImpl.getByYear(location);
		return yoyList;
	}

	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/getYearCount/{location}")
	public List<Integer> getYearCount(@PathVariable("location") String location){
		List<Integer> yoyCount = new ArrayList<>();
		yoyCount = trendServiceImpl.getByYearCount(location);
		return yoyCount;
	}
}
