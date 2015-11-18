defmodule Teenager do
  def hey(input) do
    cond do
      Statement.silence?(input) -> "Fine. Be that way!"
      Statement.shouting?(input)  -> "Whoa, chill out!"
      Statement.question?(input) -> "Sure."
      true -> "Whatever."
    end
  end
end

defmodule Statement do
  def silence?(input) do
    String.length(String.strip(input)) == 0
  end

  def shouting?(input) do
    input == String.upcase(input) and contains_letters?(input)
  end

  def question?(input) do
    String.ends_with?(input, "?")
  end

  defp contains_letters?(input) do
    String.match?(input, ~r/[\p{L}]/)
  end
end
