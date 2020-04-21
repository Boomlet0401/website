package boomlet.app.data;

import java.sql.Timestamp;

public class UserToken {
	
	private long id;
	private Timestamp expiry;
	private String token;
	
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
	
	@Override
	public String toString() {
		return "UserToken [id=" + id + ", expiry=" + expiry + ", token=" + token + "]";
	}
	

}
