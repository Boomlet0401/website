package boomlet.app.dao;

import java.math.BigInteger;
import java.util.List;

import boomlet.app.data.Proposal;

public interface ProposalDAO {
	
	public BigInteger save(Proposal proposal);
	public void update(Proposal user,long id);
	public void delete(long id);
	public List<Proposal> list();
	public Proposal get(long id);
	public List<Proposal> listForPublisher(long id); 
	public List<Proposal> listForClient(long id); 

}
