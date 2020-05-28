package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;
import boomlet.app.data.UpdateInfluencer;

public interface UpdateInfluencerDAO {
	
	public BigInteger save(UpdateInfluencer updateInfluencer);
	public void update(UpdateInfluencer updateInfluencer,long id);
	public void delete(long id);
	public List<UpdateInfluencer> list();
	public UpdateInfluencer get(long id);


}
