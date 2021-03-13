package com.accolite.opportunitymanagement.service;

import java.util.List;

public interface TrendService {
	public List<String> getByLocation();
	public List<Long> getByLocationCount();
	public List<String> getBySkill();
	public List<Integer> getBySkillCount();
	public List<String> getByYear();
	public List<Integer> getByYearCount();
	public List<String> getByYear(String loc);
	public List<Integer> getByYearCount(String loc);
}
