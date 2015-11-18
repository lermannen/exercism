defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t) :: map()
  def count(sentence) do
    do_work(prepare_string(sentence), Map.new)
  end

  defp do_work([], m), do: m

  defp do_work([h|t], m) do
    m = Map.put(m, h, Map.get(m, h, 0) + 1)
    do_work(t, m)
  end

  defp prepare_string(sentence) do
    String.split(String.downcase(replace_bad_chars(sentence)))
  end

  defp replace_bad_chars(sentence) do
    String.replace(remove_non_word_chars(sentence), "_", " ")
  end

  defp remove_non_word_chars(sentence) do
    String.replace(sentence, ~r/[^\w -]/u, "")
  end
end
