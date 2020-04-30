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
	
	public Proposal() {
	}

	public Proposal(long id, Date proposal_date, String brand_agency, String brand_name, String client_name,
			String strategist, String contact_number, String email_id, String influencer_category,
			String influencer_type, String plateform, String deliverables, String co_ordinates, String campaign_budget,
			String campaign_duration, String client_detail) {
		super();
		this.id = id;
		this.proposal_date = proposal_date;
		this.brand_agency = brand_agency;
		this.brand_name = brand_name;
		this.client_name = client_name;
		this.strategist = strategist;
		this.contact_number = contact_number;
		this.email_id = email_id;
		this.influencer_category = influencer_category;
		this.influencer_type = influencer_type;
		this.plateform = plateform;
		this.deliverables = deliverables;
		this.co_ordinates = co_ordinates;
		this.campaign_budget = campaign_budget;
		this.campaign_duration = campaign_duration;
		this.client_detail = client_detail;
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
	
	

}
