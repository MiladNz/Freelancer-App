import { useQuery } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalService";

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ["proposals"],
    queryFn: createProposalApi,
  });

  const { proposals } = data || {};
  return { isLoading, proposals };
}
