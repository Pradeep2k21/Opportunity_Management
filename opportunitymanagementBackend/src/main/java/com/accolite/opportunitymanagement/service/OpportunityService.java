package com.accolite.opportunitymanagement.service;

import com.accolite.opportunitymanagement.model.Opportunity;

import java.util.List;

public interface OpportunityService {

    public Opportunity getOpportunity(int id);
    public List<Opportunity> getAllOpportunity();

    public int insert(Opportunity opportunity);

    public int update(Opportunity opportunity,int id);

    public int delete(int id);

}
