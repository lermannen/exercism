defmodule ListOps do
  # Please don't use any external modules (especially List) in your
  # implementation. The point of this exercise is to create these basic functions
  # yourself.
  #
  # Note that `++` is a function from an external module (Kernel, which is
  # automatically imported) and so shouldn't be used either.

  @spec count(list) :: non_neg_integer
  def count(l) do
    do_count(l, 0)
  end

  defp do_count([], count), do: count

  defp do_count([head | tail], count) do
    do_count(tail, count + 1)
  end

  @spec reverse(list) :: list
  def reverse(l) do
    do_reverse(l, [])
  end

  defp do_reverse([], l), do: l

  defp do_reverse([h|t], l) do
    do_reverse(t, [h|l])
  end

  @spec map(list, (any -> any)) :: list
  def map(l, f) do

  end

  @spec filter(list, (any -> as_boolean(term))) :: list
  def filter(l, f) do

  end

  @type acc :: any
  @spec reduce(list, acc, ((any, acc) -> acc)) :: acc
  def reduce(l, acc, f) do

  end

  @spec append(list, list) :: list
  def append(a, b) do

  end

  @spec concat([[any]]) :: [any]
  def concat(ll) do

  end
end
