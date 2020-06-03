package boomlet.app.dao;

import java.util.List;
import boomlet.app.data.Cities;

public interface CitiesDAO {
	public Cities get(long id);
	public List<Cities> list(int stateId);

}
