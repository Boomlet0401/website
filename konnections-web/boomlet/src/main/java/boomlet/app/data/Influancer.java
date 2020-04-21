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
    
    public Influancer() {
    	
    }   
	
	public Influancer(long id, String name, String email, String gender, String type, String contact_1,
			String contact_2, String contact_3, String country, String profile_image, String language, String location,
			String category, String vendor, String remark, long created_by, boolean aproved, Date created_at,
			String insta_followers, String fb_followers, String lk_connections, String tw_connections) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.gender = gender;
		this.type = type;
		this.contact_1 = contact_1;
		this.contact_2 = contact_2;
		this.contact_3 = contact_3;
		this.country = country;
		this.profile_image = profile_image;
		this.language = language;
		this.location = location;
		this.category = category;
		this.vendor = vendor;
		this.remark = remark;
		this.created_by = created_by;
		this.aproved = aproved;
		this.created_at = created_at;
		this.insta_followers = insta_followers;
		this.fb_followers = fb_followers;
		this.lk_connections = lk_connections;
		this.tw_connections = tw_connections;
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
    
}
