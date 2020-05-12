package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Disclaimer;

public interface DisclaimerDAO {

	public BigInteger save(Disclaimer disclaimer);
	public void update(Disclaimer disclaimer,long id);
	public void delete(long id);
	public List<Disclaimer> list();
	public Disclaimer get(long id);
	
}
