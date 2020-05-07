package boomlet.app.data;

import java.sql.Date;

public class Proposal {
	
	private long id;
	private Date proposal_date;
	private String brand_agency;
	private String brand_name;
	private String client_name;
	private String strategist;
	private String contact_number;
	private String email_id;
	private String influencer_category;
	private String influencer_type;
	private String plateform;
	private String deliverables;
	private String co_ordinates;
	private String campaign_budget;
	private String campaign_duration;
	private String client_detail;
	private String added_by;
    private long added_by_id;
    private String updated_by;
    private long updated_by_id;
    private Date last_update_date;
    private boolean update_request;
    private long update_id;
	
	public Proposal() {
	}

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getProposal_date() {
		return proposal_date;
	}

	public void setProposal_date(Date proposal_date) {
		this.proposal_date = proposal_date;
	}

	public String getBrand_agency() {
		return brand_agency;
	}

	public void setBrand_agency(String brand_agency) {
		this.brand_agency = brand_agency;
	}

	public String getBrand_name() {
		return brand_name;
	}

	public void setBrand_name(String brand_name) {
		this.brand_name = brand_name;
	}

	public String getClient_name() {
		return client_name;
	}

	public void setClient_name(String client_name) {
		this.client_name = client_name;
	}

	public String getStrategist() {
		return strategist;
	}

	public void setStrategist(String strategist) {
		this.strategist = strategist;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getInfluencer_category() {
		return influencer_category;
	}

	public void setInfluencer_category(String influencer_category) {
		this.influencer_category = influencer_category;
	}

	public String getInfluencer_type() {
		return influencer_type;
	}

	public void setInfluencer_type(String influencer_type) {
		this.influencer_type = influencer_type;
	}

	public String getPlateform() {
		return plateform;
	}

	public void setPlateform(String plateform) {
		this.plateform = plateform;
	}

	public String getDeliverables() {
		return deliverables;
	}

	public void setDeliverables(String deliverables) {
		this.deliverables = deliverables;
	}

	public String getCo_ordinates() {
		return co_ordinates;
	}

	public void setCo_ordinates(String co_ordinates) {
		this.co_ordinates = co_ordinates;
	}

	public String getCampaign_budget() {
		return campaign_budget;
	}

	public void setCampaign_budget(String campaign_budget) {
		this.campaign_budget = campaign_budget;
	}

	public String getCampaign_duration() {
		return campaign_duration;
	}

	public void setCampaign_duration(String campaign_duration) {
		this.campaign_duration = campaign_duration;
	}

	public String getClient_detail() {
		return client_detail;
	}

	public void setClient_detail(String client_detail) {
		this.client_detail = client_detail;
	}


	public String getAdded_by() {
		return added_by;
	}


	public void setAdded_by(String added_by) {
		this.added_by = added_by;
	}


	public long getAdded_by_id() {
		return added_by_id;
	}


	public void setAdded_by_id(long added_by_id) {
		this.added_by_id = added_by_id;
	}


	public String getUpdated_by() {
		return updated_by;
	}


	public void setUpdated_by(String updated_by) {
		this.updated_by = updated_by;
	}


	public long getUpdated_by_id() {
		return updated_by_id;
	}


	public void setUpdated_by_id(long updated_by_id) {
		this.updated_by_id = updated_by_id;
	}


	public Date getLast_update_date() {
		return last_update_date;
	}


	public void setLast_update_date(Date last_update_date) {
		this.last_update_date = last_update_date;
	}


	public boolean isUpdate_request() {
		return update_request;
	}


	public void setUpdate_request(boolean update_request) {
		this.update_request = update_request;
	}


	public long getUpdate_id() {
		return update_id;
	}


	public void setUpdate_id(long update_id) {
		this.update_id = update_id;
	}
	
	

}
