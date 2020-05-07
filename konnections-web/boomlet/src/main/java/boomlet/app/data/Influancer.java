package boomlet.app.data;

import java.sql.Date;

public class Influancer {
	
	private long id;
    private String name;
    private String email;
    private String gender;
    private String type;
    private String contact_1;
    private String contact_2;
    private String contact_3;
    private String country;
    private String profile_image;
    private String language;
    private String location;
    private String category;
    private String vendor;
    private String remark;
    private long created_by;
    private boolean aproved;
    private Date created_at;
    private String insta_followers;
    private String fb_followers;
    private String lk_connections;
    private String tw_connections;
    private String added_by;
    private long added_by_id;
    private String updated_by;
    private long updated_by_id;
    private Date last_update_date;
    private boolean update_request;
    private long update_id;
    
    public Influancer() {
    	
    }   
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}	

	public String getContact_1() {
		return contact_1;
	}

	public void setContact_1(String contact_1) {
		this.contact_1 = contact_1;
	}

	public String getContact_2() {
		return contact_2;
	}

	public void setContact_2(String contact_2) {
		this.contact_2 = contact_2;
	}

	public String getContact_3() {
		return contact_3;
	}



	public String getFb_followers() {
		return fb_followers;
	}

	public void setFb_followers(String fb_followers) {
		this.fb_followers = fb_followers;
	}

	public String getLk_connections() {
		return lk_connections;
	}

	public void setLk_connections(String lk_connections) {
		this.lk_connections = lk_connections;
	}

	public String getTw_connections() {
		return tw_connections;
	}

	public void setTw_connections(String tw_connections) {
		this.tw_connections = tw_connections;
	}

	public void setContact_3(String contact_3) {
		this.contact_3 = contact_3;
	}



	public String getInsta_followers() {
		return insta_followers;
	}


	public void setInsta_followers(String insta_followers) {
		this.insta_followers = insta_followers;
	}


	public Date getCreated_at() {
		return created_at;
	}


	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}


	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getProfile_image() {
		return profile_image;
	}

	public void setProfile_image(String profile_image) {
		this.profile_image = profile_image;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public long getCreated_by() {
		return created_by;
	}

	public void setCreated_by(long created_by) {
		this.created_by = created_by;
	}

	public boolean isAproved() {
		return aproved;
	}

	public void setAproved(boolean aproved) {
		this.aproved = aproved;
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
