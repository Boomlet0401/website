package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;
import boomlet.app.data.Tiktok;

public interface TiktokDAO {
	public BigInteger save(Tiktok tiktok);
	public void update(Tiktok tiktok,long id);
	public void delete(long id);
	public List<Tiktok> list();
	public Tiktok get(long id);
}
