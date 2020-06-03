package boomlet.app.dao;

import java.util.List;

import boomlet.app.data.States;

public interface StatesDAO {
	
	public States get(long id);
	public List<States> list(int countryId);

}
