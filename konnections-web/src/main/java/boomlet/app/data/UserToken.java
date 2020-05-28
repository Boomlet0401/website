package boomlet.app.data;

import java.sql.Timestamp;

public class UserToken {
	
	private long id;
	private Timestamp expiry;
	private String token;
	private long user_id;
	
	public UserToken() {
		
	}	
	public UserToken(long id, Timestamp expiry, String token) {
		super();
		this.id = id;
		this.expiry = expiry;
		this.token = token;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Timestamp getExpiry() {
		return expiry;
	}
	public void setExpiry(Timestamp expiry) {
		this.expiry = expiry;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
		

}
