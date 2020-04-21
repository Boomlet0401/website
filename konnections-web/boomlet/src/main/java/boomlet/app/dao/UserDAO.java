package boomlet.app.dao;

import java.util.List;
import boomlet.app.data.User;

public interface UserDAO {	
	public long save(User user);
	public void update(User user,long id);
	public void delete(long id);
	public List<User> list();
	public User get(String email);
	public User getByMobile(String mobile);
	public User checkLogin(String email, String pass);	
}
